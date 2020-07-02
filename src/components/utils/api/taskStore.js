import pouchyStore from 'pouchy-store';
import config from './configApi';

class taskStore extends pouchyStore {
    get name() {
        return this._name;
    }

    setName(userId) {
        this._name = `fishtask_${userId}`;
        console.log(this._name);
    }

    get urlRemote() {
        return config.couchDBUrl;
    }

    get optionsRemote() {
        return {
            auth: config.couchDBAuth,
        };
    }

    sortData(data) {
        data.sort((one, two) => {
            const oneTs = one.createdAt;
            const twoTs = two.createdAt;
            if (oneTs > twoTs) return -1;
            if (oneTs < twoTs) return 1;
            return 0;
        });
    }
}

export default new taskStore();