import axios from "axios"

const API = import.meta.env.VITE_API_URL;

export const getExpenses = async () => {
    const response = await axios.get(API);
    return response.data;
}
export const createExpense = async (expenseData) => {
    const response = await axios.post(API, expenseData);
    return response.data;
};
export const deleteExpense = async (id) => {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
};
export const getSummary = async () => {
    const response = await axios.get(
        "http://localhost:5000/api/expenses/summary"
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