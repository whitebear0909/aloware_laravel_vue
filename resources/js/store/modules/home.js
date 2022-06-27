import * as types from "../mutation-types";

// state
export const state = {
    comments: {
        data: [],
        error: null,
    },
    isLoading: false,
};

// getters
export const getters = {
    comments: (state) => state.comments,
    isLoading: (state) => state.isLoading,
};

// mutations
export const mutations = {
    //GET COMMENTS
    [types.GET_COMMENTS_REQUEST](state, {}) {
        state.comments.data = [];
        state.comments.error = null;
        state.isLoading = true;
    },
    [types.GET_COMMENTS_SUCCESS](state, { data }) {
        state.comments.data = data;
        state.isLoading = false;
    },
    [types.GET_COMMENTS_FAIL](state, { error }) {
        state.isLoading = false;
        state.comments.error = error;
    },
    //SAVE COMMENT
    [types.SAVE_COMMENT_REQUEST](state, {}) {
        state.isLoading = true;
    },
    [types.SAVE_COMMENT_SUCCESS](state) {
        state.isLoading = false;
    },
    [types.SAVE_COMMENT_FAIL](state) {
        state.isLoading = false;
    },
};

// actions
export const actions = {
    async getComments({ commit }, payload) {
        try {
            commit(types.GET_COMMENTS_REQUEST, {});
            const { data } = await axios.get("/comments");
            commit(types.GET_COMMENTS_SUCCESS, { data: data });
        } catch (e) {
            commit(types.GET_COMMENTS_FAIL, { error: e });
        }
    },
    async saveComment({ commit }, payload) {
        try {
            commit(types.SAVE_COMMENT_REQUEST, {});
            const { data } = await axios.post(`/comments`, payload.data);

            commit(types.SAVE_COMMENT_SUCCESS);
        } catch (e) {
            commit(types.SAVE_COMMENT_FAIL, { error: e });
        }
    },
};
