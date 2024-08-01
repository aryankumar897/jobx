"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const OrganizationContext = createContext();

export const OrganizationProvider = ({ children }) => {
    // to create a category
    const [name, setName] = useState("");
    // for fetching all categories
    const [organization, setOrganization] = useState([]);
    // for update and delete
    const [updatingOrganization, setUpdatingOrganization] = useState(null);

    const createOrganization = async () => {
        try {
            const response = await fetch(`${process.env.API}/admin/organization`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });

            const data = await response.json();

            if (!response.ok) {
                // console.log("data.err", data);
                toast.error(data.err);
            } else {
                toast.success("organization created");
                setName("");
                setOrganization([data, ...organization]);
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Try again");
        }
    };

    const fetchOrganization = async () => {
        try {
            const response = await fetch(`${process.env.API}/admin/organization`);
            const data = await response.json();

            if (!response.ok) {
                toast.error(data.err);
            } else {
                setOrganization(data);
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Try again");
        }
    };

    const fetchOrganizationPublic = async () => {
        try {
            const response = await fetch(`${process.env.API}/organization`);
            const data = await response.json();

            if (!response.ok) {
                toast.error(data);
            } else {
                setOrganization(data);
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Try again");
        }
    };

    const updateOrganization = async () => {
        try {
            const response = await fetch(
                `${process.env.API}/admin/organization/${updatingOrganization?._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatingOrganization),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                toast.error(data);
            } else {
                toast.success("Industry updated");
                setUpdatingOrganization(null);
                setOrganization(
                    organization.map((category) =>
                        category._id === updatingOrganization._id ? data : category
                    )
                );
                setUpdatingOrganization(null);
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Try again");
        }
    };

    const deleteOrganization = async () => {
        try {
            const response = await fetch(
                `${process.env.API}/admin/organization/${updatingOrganization?._id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                toast.error(data);
            } else {
                toast.success("organization  deleted");
                setOrganization(
                    organization.filter((industry) => industry._id !== updatingOrganization._id)
                );
                setUpdatingOrganization(null);
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Try again");
        }
    };

    return (
        <OrganizationContext.Provider
            value={{
                name,
                setName,
                organization,
                setOrganization,
                updatingOrganization,
                setUpdatingOrganization,
                createOrganization,
                fetchOrganization,
                fetchOrganizationPublic,
                updateOrganization,
                deleteOrganization,
            }}
        >
            {children}
        </OrganizationContext.Provider>
    );
};

export const useOrganization = () => useContext(OrganizationContext);