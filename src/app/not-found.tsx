
const notfound = () => {
    return (
        <section className="bg-white pt-50 bg-cover bg-center bg-[url(/images/info/bg-section.png)]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary">
                        404
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-secondary md:text-4xl">
                        Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-secondary">
                        Sorry, we can't find that page. You'll find lots to explore on the home page.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default notfound
