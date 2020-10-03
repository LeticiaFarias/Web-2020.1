export default class FirebaseService {
  static list = (firestore, callback) => {
    let ref = firestore.collection("disciplinas");
    ref.onSnapshot((query) => {
      let disciplinas = [];
      query.forEach((doc) => {
        const { nome, curso, capacidade } = doc.data();
        disciplinas.push({
          id: doc.id,
          nome,
          curso,
          capacidade,
        });
      });
      callback(disciplinas);
    });
  };

  static delete = (firestore, callback, id) => {
    firestore
      .collection("disciplinas")
      .doc(id)
      .delete()
      .then(() => callback("OK"))
      .catch((error) => callback("Erro!"));
  };

  static create = (firestore, callback, disiciplina) => {
    firestore
      .collection("disciplinas")
      .add({
        nome: disiciplina.nome,
        curso: disiciplina.curso,
        capacidade: disiciplina.capacidade,
      })
      .then(() => callback("OK!"))
      .catch((error) => callback("Erro!"));
  };

  static retrieve = (firestore, callback, id) => {
    firestore
      .collection("disciplinas")
      .doc(id)
      .get()
      .then((doc) => {
        callback({
          nome: doc.data().nome,
          curso: doc.data().curso,
          capacidade: doc.data().capacidade,
        });
      })
      .catch((error) => callback(null));
  };

  static edit = (firestore, callback, disiciplina, id) => {
    firestore
      .collection("disciplinas")
      .doc(id)
      .set({
        nome: disiciplina.nome,
        curso: disiciplina.curso,
        capacidade: disiciplina.capacidade,
      })
      .then(() => callback("OK!"))
      .catch((error) => callback("Erro!"));
  };
}
