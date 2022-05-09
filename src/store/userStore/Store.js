import { action, makeObservable, observable } from 'mobx';
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../../firebase";
import {getDoc, doc} from 'firebase/firestore'

export default class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.user = null;

        onAuthStateChanged(auth, async (user) =>{
            const docRef = doc(db, "users", user.email);
            const docRes = await getDoc(docRef);
            this.user = docRes.data();
        })

        makeObservable(this, {
            user: observable,
            getUser: action,
        });
    }

    getUser = async () => {
        onAuthStateChanged(auth, async (user) =>{
            const docRef = doc(db, "users", user.email);
            const docRes = await getDoc(docRef);
            this.user = docRes.data();
        })
    }
}
