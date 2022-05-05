import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDhQxCAGZQfOaRj4vKMvPqZ673vnDvUd-E',
  authDomain: 'myapp-415f2.firebaseapp.com',
  projectId: 'myapp-415f2',
  storageBucket: 'myapp-415f2.appspot.com',
  messagingSenderId: '402959260167',
  appId: '1:402959260167:web:6bc0ed30d59e0ac07568a2',
}

const app = initializeApp(firebaseConfig)

export const getFirestoreApp = () => {
  return app
}
