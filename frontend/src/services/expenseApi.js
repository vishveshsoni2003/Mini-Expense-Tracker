import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL;

export const getExpenses = async () => {
    const response = await axios.get(API);
    return response.data;
}
export const createExpense = async (expenseData) => {
    const response = await axios.post(API, expenseData);
    return response.data;
};
export const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/expenses/${id}`);
    return response.data;
};
export const getSummary = async () => {
    const response = await axios.get(
        `${BASE_URL}/api/expenses/getSummary`
    );

    return response.data;
};
export const updateExpense = async (id, expenseData) => {
    const response = await axios.put(
        `${API}/${id}`,
        expenseData
    );

    return response.data;
};