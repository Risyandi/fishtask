import pouchyStore from 'pouchy-store';

class userStore extends pouchyStore {
    get name() {
        return 'user';
    }

    get isUseRemote() {
        return false;
    }

    get single() {
        return this.name;
    }
}

export default new userStore();
