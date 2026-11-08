import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // Create account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                return await this.login({ email, password });
            }

            return userAccount;
        } catch (error) {
            console.log("AuthService::createAccount error:", error);
            throw error;
        }
    }

    // Login user
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (error) {
            console.log("AuthService::login error:", error);
            throw error;
        }
    }

    // Get current user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AuthService::getCurrentUser error:", error);
            return null;
        }
    }

    // Logout user
    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            console.log("AuthService::logout error:", error);
        }
    }
}

// singleton instance
const authService = new AuthService();

export default authService;