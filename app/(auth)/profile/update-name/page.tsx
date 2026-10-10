import { Suspense } from "react";
import UpdateForm from "./UpdateForm";

export const dynamic = 'force-dynamic';


const UpdateName = () => {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <UpdateForm />
        </Suspense>
    );
};

export default UpdateName;
