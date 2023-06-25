import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDTtYSiqcfoAQ6GU6DKpK0BCm9czgUGNqk",
    authDomain: "duma-collective.firebaseapp.com",
    projectId: "duma-collective",
    storageBucket: "duma-collective.appspot.com",
    messagingSenderId: "55778854266",
    appId: "1:55778854266:web:998de031e5a911d021c2c3",
    measurementId: "G-NYNSYZK5V0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const useFetchFirebase = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const ref = database.ref(collectionName);
        ref.on('value', (snapshot) => {
          const fetchedData = snapshot.val();
          setData(fetchedData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      const ref = database.ref(collectionName);
      ref.off(); // Unsubscribe from the database changes when the component unmounts
    };
  }, [collectionName]);

  return data;
};
