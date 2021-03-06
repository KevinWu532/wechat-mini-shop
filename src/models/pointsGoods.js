import pointsGoods from "@/services/pointsGoods";

export default {
    namespace: "pointsGoods",
    state: {
        list: {
            result: { list: [], total_number: 0 }
        },
        info: { result: { info: {} } }
    },

    effects: {
        * list({ payload, callback }, { call, put }) {
            const response = yield call(pointsGoods.list, payload);
            yield put({
                type: "_list",
                payload: response
            });
            if (callback) callback(response);
        },
        * info({ payload, callback }, { call, put }) {
            const response = yield call(pointsGoods.info, payload);
            yield put({
                type: "_info",
                payload: response
            });
            if (callback) callback(response);
        }
    },
    reducers: {
        _list(state, action) {
            return {
                ...state,
                list: action.payload
            };
        },
        _info(state, action) {
            return {
                ...state,
                info: action.payload
            };
        }
    }
};
