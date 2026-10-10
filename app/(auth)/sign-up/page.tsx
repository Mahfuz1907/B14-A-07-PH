export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import SignUpForm from "./SignUpForm";
import { Spinner } from "@heroui/react";



const SignUpPage = () => {
    
    return (
        <Suspense fallback={<div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <span className="text-xs text-muted">Large</span>
              </div>}>
            <SignUpForm />
        </Suspense>
    );
};

export default SignUpPage;