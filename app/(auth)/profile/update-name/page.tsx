import { Suspense } from "react";
import UpdateForm from "./UpdateForm";
import { Spinner } from "@heroui/react";

export const dynamic = 'force-dynamic';


const UpdateName = () => {
    return (
        <Suspense 
        fallback={<div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <span className="text-xs text-muted">Large</span>
              </div>}>
            <UpdateForm />
        </Suspense>
    );
};

export default UpdateName;
