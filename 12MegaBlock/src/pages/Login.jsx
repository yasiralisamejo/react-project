import authService from "../appwrite/Auth";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const submit = async (data) => {
    try {
        const session = await authService.login(data);

        if (session) {
            const user = await authService.getCurrentUser();

            if (user) {
                dispatch(login(user)); // ✅ THIS FIXES YOUR PROBLEM
            }
        }
    } catch (error) {
        console.log(error);
    }
};