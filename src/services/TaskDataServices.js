import "firebase/firestore";
import firebase from "../firebaseConfig";

const db = firebase.firestore();

// fetch all tasks
export const getAllTasks = async () => {
  let tasks = [];
  return db
    .collection("tasks")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().text}, ${doc.data().day}`);
        tasks.push({
          id: doc.id,
          text: doc.data().text,
          day: doc.data().day,
          reminder: doc.data().reminder,
        });
      });
      console.log(tasks);
      return tasks;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

//  fetch single task
export const getTaskById = async (id) => {
  let task = {};
  return db
    .collection("tasks")
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        task = {
          id: doc.id,
          text: doc.data().text,
          day: doc.data().day,
          reminder: doc.data().reminder,
        };
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      return task;
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

// add new task
export const addTask = async (task) => {
  return db
    .collection("tasks")
    .add({
      text: task.text,
      day: task.day,
      reminder: task.reminder,
    })
    .then(() => {
      console.log("Task added successfully!");
    })
    .catch((error) => {
      console.error("Error writing Adding: ", error);
    });
};

// update task by id
export const updateTask = async (id, task) => {
  let updatedTask;
  return db
    .collection("tasks")
    .doc(id)
    .update({
      text: task.text,
      day: task.day,
      reminder: task.reminder,
    })
    .then(() => {
      console.log("Task successfully updated!");
      updatedTask = {
        text: task.text,
        day: task.day,
        reminder: task.reminder,
      };
      return updatedTask;
    })
    .catch((error) => {
      console.error("Error updating Task: ", error);
    });
};

// Delete Task by id
export const deleteTask = async (id) => {
  return db
    .collection("tasks")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Task successfully deleted!");
      return true;
    })
    .catch((error) => {
      console.error("Error removing Task: ", error);
      return false;
    });
};
