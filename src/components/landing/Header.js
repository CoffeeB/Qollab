import Logo from "../general/Logo"
export default function Header() {
    return (
        <header className="col-md-4 col-sm-6">
            <div className="d-flex justify-content-center border-bottom border-grey p-3">
                <Logo />
            </div>
        </header>
    )
}