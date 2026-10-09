export default function AuthorsLayout({ children }: LayoutProps<"/blogs/authors">) {
    return (
        <div>
            <p>Authors layout: applies only to /blogs/authors and its nested routes</p>
            {children}
        </div>
    );
}
