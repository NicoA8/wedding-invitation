<template>
    <header :class="$style.hero">
        <div :class="$style.container">
            <figure :class="$style.name_box">
                <img
                    :class="[$style.name, $style.bride]"
                    src="https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/ade.svg"
                    alt="Adelina"
                />
                <img
                    :class="[$style.name, $style.groom]"
                    src="https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/alex.svg"
                    alt="Alexandru"
                />
            </figure>
            <img
                :class="$style.photo"
                src="https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/photo.jpg?t=2023-05-15T19%3A23%3A18.621Z"
                alt="bride and groom"
            />
            <nav :class="$style.menu">
                <ul>
                    <li>
                        <a href="#noi">NOI</a>
                    </li>
                    <li :class="$style.separator"></li>
                    <li>
                        <a href="#detalii">DETALII</a>
                    </li>
                    <li :class="$style.separator"></li>
                    <li>
                        <a href="#confirmare">CONFIRMARE</a>
                    </li>
                    <li :class="$style.separator"></li>
                </ul>
            </nav>
            <h1 class="heading">Invitație nuntă Adelina și Alexandru.</h1>
        </div>
    </header>
</template>

<style lang="scss" module>
.hero {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    transition: all 0.2s;
}

.photo {
    width: 15rem;
    height: auto;
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform: translate(-5%, -45%);
}

.container {
    height: 40rem;
    width: 100%;
    position: relative;

    @media (min-width: 560px) {
        height: 45rem;
    }

    @media (min-width: 800px) {
        height: 50rem;
    }
}

.name_box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    transform: translateX(4%);
    z-index: 1;

    &::before {
        --square-size: 1rem;

        content: "";
        width: var(--square-size);
        height: var(--square-size);
        position: absolute;
        inset-block-start: 50%;
        inset-inline-start: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--gold);
        mask-size: 100%;
        mask-repeat: no-repeat;
        mask-image: url("https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/square.svg");
    }
}

.name {
    width: 15rem;
    height: auto;

    &.groom {
        margin-inline-start: 2rem;
    }
}

.menu {
    position: absolute;
    inset-block-end: 0;
    inset-inline-end: 3.5rem;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;

        li {
            letter-spacing: 1px;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 400;
            transition: all 0.2s;

            &:last-child {
                display: none;
            }

            &:hover {
                letter-spacing: 2px;
            }
        }
    }
}

.separator {
    width: 0.25rem;
    height: 0.25rem;
    background-color: var(--gold);
}

@media (min-width: 400px) {
    .photo {
        width: 18rem;
        transform: translate(-6.5%, -45%);
    }

    .name_box::before {
        --square-size: 1.25rem;
    }

    .name {
        width: 16rem;
    }

    .menu {
        inset-inline-end: 4.5rem;
    }
}

@media (min-width: 560px) {
    .photo {
        width: 21rem;
        transform: translate(-6%, -45%);
    }

    .name_box::before {
        --square-size: 1.5rem;
    }

    .name {
        width: 19rem;

        &.groom {
            margin-inline-start: 4rem;
        }
    }

    .menu {
        inset-inline-end: 5rem;
    }
}

@media (min-width: 800px) {
    .photo {
        width: 25rem;
        transform: translate(-6%, -40%);
    }

    .name_box::before {
        --square-size: 2rem;
    }

    .name {
        width: 25rem;

        &.groom {
            margin-inline-start: 4rem;
        }
    }

    .menu {
        inset-inline-end: unset;
        inset-inline-start: 5.5rem;

        ul {
            align-items: flex-start;
            gap: 0.25rem;

            li {
                font-size: 1.15rem;
            }
        }
    }
}
</style>
