import { types } from './types';
import httpService from '../../services/httpService';

/**
 *
 * @param {string} id
 * @param {string} body
 * @returns {Redux action}
 */

export const createAnswer = (id, body) => {
    return async (dispatch, getState) => {
        try {
            const questions = [...getState().questions.questions];
            const question = questions.find(q => q.id === id);
            const previousAnswers = question.answers;
            const answers = [
                ...previousAnswers,
                { order: previousAnswers.length + 1, body }
            ];

            const data = {
                "answers": [...answers]
            };

            await httpService.put(`/api/questions/${id}`, data);
            // update answers
            question.answers = [...answers];

            dispatch({
                type: types.CREATE_ANSWER_SUCCESS
            });
        } catch (error) {
            console.log('There was an error while creating the answer', error);
            dispatch({ type: types.CREATE_ANSWER_FAIL });
            setTimeout(
                () => dispatch({ type: types.CREATE_ANSWER_REVERT_ALERT }),
                2000
            );
        }
    };
};
