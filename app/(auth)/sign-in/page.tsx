export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import SignInForm from "./SignInForm";


const SignInPage = () => {
    

    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <SignInForm />
        </Suspense>
    );
};

export default SignInPage;