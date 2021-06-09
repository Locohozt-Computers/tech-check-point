export type SignupUserType = {
    username: string;
    email: string;
    provider_name: string;
    provider_id: string;
    password: string;
    password_confirmation: string;
    referral_id: string;
    ip_address: string;
    role_id: string;
}

export type SigninUserType = Pick<SignupUserType, 'email' | 'password'>

export type ChangePasswordType = {
    new_password: string;
    old_password: string;
}
