<template>
    <div class="main_page">
        <div class="hero">
            <img class="name bride" src="../assets/img/ade.svg" alt="name" />
            <img
                class="and"
                src="../assets/img/square.svg"
                alt="traditional square"
            />
            <img class="name groom" src="../assets/img/alex.svg" alt="name" />
        </div>
        <img
            class="photo"
            src="../assets/img/photo.png"
            alt="bride and groom"
        />
        <nav class="menu">
            <ul>
                <li>
                    <a href="#noi">NOI</a>
                </li>
                <li class="dot"></li>
                <li>
                    <a href="#detalii">DETALII</a>
                </li>
                <li class="dot"></li>
                <li>
                    <a href="#confirmare">CONFIRMARE</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.main_page {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--gold) transparent;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--gold);
    }
}

.main_page :deep(> *) {
    scroll-snap-align: start end;
    scroll-snap-stop: always;
}

.hero {
    width: 100vw;
    height: 100vh;
    position: relative;

    &::before,
    &::after {
        content: "";
        position: absolute;
        z-index: 1;
        inset-block-start: -1rem;
    }

    &::before {
        width: 3.125rem;
        height: 252.25rem;
        background-color: var(--gold);
        inset-inline-start: 0;
        mask: url("../assets/img/full-line.svg") no-repeat 50% 50%;
    }

    &::after {
        width: 3.125rem;
        height: 252.25rem;
        inset-inline-end: 0;
        mask: url("../assets/img/part-line.svg") no-repeat 50% 50%;
        background-color: var(--gold);
    }
}

.and {
    width: 1.375rem;
    height: auto;
    position: absolute;
    inset-block-start: 17.5%;
    inset-inline-start: 10rem;
    z-index: 5;
}

.photo {
    width: 13rem;
    height: auto;
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform: translate(-5%, -45%);
}

.name {
    width: 18rem;
    height: auto;
    position: absolute;
    inset-inline-start: 0;
    z-index: 5;
}

.bride {
    inset-block-start: 12%;
    transform: translate(3%, -40%);
}

.groom {
    inset-block-start: 22%;
    transform: translate(10%, -30%);
}

.menu {
    position: absolute;
    inset-block-end: 1.5rem;
    inset-inline-end: 3.5rem;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 0.5rem;

        li {
            letter-spacing: 0.2rem;
            text-decoration: none;
        }
    }
}

.dot {
    width: 4px;
    height: 4px;
    background-color: var(--gold);
}

@media (min-height: 650px) {
    .photo {
        width: 16rem;
    }
}

@media (min-height: 750px) and (min-width: 400px) {
    .photo {
        width: 19rem;
    }
    .menu {
        inset-block-end: 2rem;
    }
}

@media (min-height: 900px) and (min-width: 400px) {
    .photo {
        width: 20rem;
        transform: translate(-4%, -45%);
    }

    .menu {
        inset-block-end: 4rem;
    }
    .name {
        width: 19rem;
        height: auto;
    }
}
</style>
