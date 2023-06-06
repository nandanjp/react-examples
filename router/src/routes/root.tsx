import { Link, Outlet, useLoaderData, Form } from "react-router-dom";
import { createContact, getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact: any = await createContact();
  return { contact };
}

const Root = () => {
  const contactData: any = useLoaderData();
  const contacts: any = contactData.contacts;

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div className="">
          <form id="search-form" role="search">
            <input
              type="search"
              aria-label="Search contacts"
              placeholder="Search"
              id="q"
            />
            <div id="search-spinner" aria-hidden hidden={true}></div>
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: any) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detai">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
