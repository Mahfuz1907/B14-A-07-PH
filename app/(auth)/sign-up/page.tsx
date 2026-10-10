export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import SignUpForm from "./SignUpForm";



const SignUpPage = () => {
    
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <SignUpForm />
        </Suspense>
    );
};

export default SignUpPage;