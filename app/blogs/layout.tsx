export default function BlogsLayout({ children }: LayoutProps<"/blogs">) {
    return (
        <div>
            <p>Blogs layout: applies only to /blogs and its nested routes</p>
            {children}
        </div>
    );
}
