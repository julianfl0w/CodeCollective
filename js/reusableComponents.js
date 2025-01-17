class OurHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="main-nav">
                <div class="navbar dark-mode">
                    <a href="/index.html">Home</a>
                    <a href="/calendar.html">Calendar</a>
                    <a href="/curriculum.html">Curriculum</a>
                    <a href="/getinvolved.html">Get Involved!</a>
                    <a href="/sponsors.html">Sponsors</a>
                    <a href="/about-us.html">About Us</a>
                </div>
                <button class="mobile-nav-bars">
                    <div class="top bar"></div>
                    <div class="middle bar"></div>
                    <div class="bottom bar"></div>
                </button>
            </nav> 
        `
    }
}

class OurFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer">
                <ul class="copyright">
                    <li>&copy; Code Collective 2025</li>
                </ul>
            </footer>
        `
    }
}
class OurMatrixLink extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <aside id="slackButton" class="slack-social slack-social__container">
                <a
                    href="https://matrix.to/#/#code-collective:matrix.org"
                    target="_blank"
                    class="slack-social__link"
                >
                    <button class="slack-social__button">
                    <img
                        src="/images/matrix_icon.jpeg"
                        alt="Matrix icon"
                        class="slack-social__icon"
                    />
                    <p class="slack-social__cta">Join our Matrix!</p>
                    </button></a
                >
            </aside>
         `
    }
}

customElements.define('our-header', OurHeader)
customElements.define('our-footer', OurFooter)
customElements.define('our-slack-link', OurMatrixLink)