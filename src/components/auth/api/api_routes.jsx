import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/v1/api/accounts";

const ApiService = {
  async login(email, password) {
    const apiUrl = `${baseUrl}/login/`;
    const headers = { "Content-Type": "application/json" };

    try {
      const response = await axios.post(
        apiUrl,
        { email, password },
        { headers, timeout: 10000 }
      );
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, error: `${error.response.data.message}` };
    }
  },

  async registerStudentUser(name, email, password, confirmPassword) {
    const apiUrl = `${baseUrl}/signup/student/`;
    const headers = { "Content-Type": "application/json" };
    const body = { name, email, password, confirm_password: confirmPassword };

    try {
      const response = await axios.post(apiUrl, body, {
        headers,
        timeout: 10000,
      });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message || response.data.non_field_errors };
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, error: `${error.response.data.message || error.response.data.non_field_errors}` };
    }
  },

  async registerAffiliateUser(name, email, password, confirmPassword) {
    const apiUrl = `${baseUrl}/signup/affiliate/`;
    const headers = { "Content-Type": "application/json" };
    const body = { name, email, password, confirm_password: confirmPassword };

    try {
      const response = await axios.post(apiUrl, body, {
        headers,
        timeout: 10000,
      });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return { success: false, error: `${error.response.data.message}` };
    }
  },

  async getUserDetails(token) {
    const apiUrl = `${baseUrl}/user-details/`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(apiUrl, { headers, timeout: 10000 });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Network error",
      };
    }
  },

  async updateProfile(token, profileData) {
    const apiUrl = `${baseUrl}/update-profile/`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.put(apiUrl, profileData, {
        headers,
        timeout: 10000,
      });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Network error",
      };
    }
  },

  async changePassword(token, oldPassword, newPassword) {
    const apiUrl = `${baseUrl}/change-password/`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = { old_password: oldPassword, new_password: newPassword };

    try {
      const response = await axios.post(apiUrl, body, {
        headers,
        timeout: 10000,
      });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Network error",
      };
    }
  },

  async requestPasswordReset(email) {
    const apiUrl = `${baseUrl}/forgot-password/`;
    const headers = { "Content-Type": "application/json" };

    try {
      const response = await axios.post(
        apiUrl,
        { email },
        { headers, timeout: 10000 }
      );
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Network error",
      };
    }
  },

  async verifyResetCode(email, code) {
    const apiUrl = `${baseUrl}/verify-code/`;
    const headers = { "Content-Type": "application/json" };
    const body = { email, verification_code: code };

    try {
      const response = await axios.post(apiUrl, body, {
        headers,
        timeout: 10000,
      });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Network error",
      };
    }
  },

  async resetPassword(email, newPassword, confirmNewPassword) {
    const apiUrl = `${baseUrl}/reset-password/`;
    const headers = { "Content-Type": "application/json" };
    const body = {
      email,
      new_password: newPassword,
      confirm_new_password: confirmNewPassword,
    };

    try {
      const response = await axios.post(apiUrl, body, {
        headers,
        timeout: 10000,
      });
      return response.status >= 200 && response.status < 300
        ? { success: true, data: response.data }
        : { success: false, error: response.data.message };
    } catch (error) {
      console.error("Network error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Network error",
      };
    }
  },
};

export default ApiService;
