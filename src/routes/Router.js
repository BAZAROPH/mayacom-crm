import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Authentification from "../layouts/authenticate/Authentification";
import Dashboard from "../layouts/view/Dashboard"

//Contacts
import CreateContact from "../layouts/contact/Create";
import ListContact from "../layouts/contact/List";
import Segment from "../layouts/contact/Segment";

//Forms
import CreateForm from "../layouts/form/Create";
import ListForm from "../layouts/form/List";

//Pages
import CreatePage from "../layouts/page/Create";
import ListPage from "../layouts/page/List";

//Emails
import CreateEmail from "../layouts/email/Create";
import ListEmail from "../layouts/email/List";
import Model from "../layouts/email/Model"

//Documents
import Documents from "../layouts/documents/Documents"

// Accounts
import Account from "../layouts/setting/Account"
import Invoice from "../layouts/setting/Invoice"

export default function Pages(){
    return (
        <Routes>
            <Route path="/login" element={<Authentification/>}></Route>

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard/>}>
                {/* Contacts */}
                <Route path="/dashboard/contacts/create" element={<CreateContact/>}></Route>
                <Route path="/dashboard/contacts/list" element={<ListContact/>}></Route>
                <Route path="/dashboard/contacts/segments" element={<Segment/>}></Route>

                {/* Forms */}
                <Route path="/dashboard/forms/create" element={<CreateForm/>}></Route>
                <Route path="/dashboard/forms/list" element={<ListForm/>}></Route>

                {/* Pages */}
                <Route path="/dashboard/pages/create" element={<CreatePage/>}></Route>
                <Route path="/dashboard/pages/list" element={<ListPage/>}></Route>

                {/* Emails */}
                <Route path="/dashboard/emails/create" element={<CreateEmail/>}></Route>
                <Route path="/dashboard/emails/list" element={<ListEmail/>}></Route>
                <Route path="/dashboard/emails/models" element={<Model/>}></Route>

                {/* Documents */}
                <Route path="/dashboard/documents" element={<Documents/>}></Route>

                {/* Settings */}
                <Route path="/dashboard/settings/account" element={<Account/>}></Route>
                <Route path="/dashboard/settings/invoice" element={<Invoice/>}></Route>
            </Route>
        </Routes>
    )
}