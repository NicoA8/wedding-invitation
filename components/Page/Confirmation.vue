<template>
    <Layout title="multumesc" v-if="completed && !datePassed" />
    <Layout title="confirmare" v-else>
        <div :class="$style.content">
            <div>
                <h2>Vă rugăm să ne confirmați prezența până la data de</h2>
                <h2 :class="$style.date">20 iunie 2023.</h2>
            </div>
            <FormBox title="Câte persoane?">
                <template #simple>
                    <Checkbox
                        title="O persoană"
                        :checked="oneGuest"
                        @check="(event) => selectOne(event)"
                    />
                    <Checkbox
                        title="Două persoane"
                        :checked="twoGuests"
                        @check="(event) => selectTwo(event)"
                    />
                </template>
            </FormBox>
            <Form
                :partner="false"
                :selected="oneGuest"
                @accept="accept"
                @decline="decline"
            />
            <Form
                :partner="true"
                :selected="twoGuests"
                @accept="accept"
                @decline="decline"
            >
            </Form>
        </div>
        <p v-if="datePassed && dateHasPassed" :class="$style.fail">
            Ne pare rău, dar evenimentul a avut loc deja.
        </p>
    </Layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NewGuest from "../../types/NewGuest";

const supabase = useSupabaseAuthClient();

const props = defineProps<{
    datePassed: boolean;
}>();

const no_guests = ref("");
const completed = ref(false);
const dateHasPassed = ref(false);

// No of people
const oneGuest = ref(false);
const twoGuests = ref(false);

const selectOne = (event: Event) => {
    oneGuest.value = true;
    twoGuests.value = false;
    no_guests.value = (event.target as HTMLInputElement).value;
};

const selectTwo = (event: Event) => {
    oneGuest.value = false;
    twoGuests.value = true;

    no_guests.value = (event.target as HTMLInputElement).value;
};

// RSVP
const decline = async (person: NewGuest, incomplete: boolean) => {
    if (!props.datePassed) {
        const { error } = await supabase.from("guests").insert({
            confirm: person.confirm,
            guest_name: person.guest_name,
            menu: person.menu,
            message: person.message,
            no_guests: no_guests.value,
            partner_name: person.partner_name,
        });
        if (!incomplete) {
            completed.value = true;
        }
        if (error) {
            console.error("Error", error);
        }
    } else {
        dateHasPassed.value = true;
    }
};

const accept = async (person: NewGuest, incomplete: boolean) => {
    if (!props.datePassed) {
        const { error } = await supabase.from("guests").insert({
            confirm: person.confirm,
            guest_name: person.guest_name,
            menu: person.menu,
            message: person.message,
            no_guests: no_guests.value,
            partner_name: person.partner_name,
        });

        if (!incomplete) {
            completed.value = true;
        }

        if (error) {
            console.error("Error", error);
        }
    } else {
        dateHasPassed.value = true;
    }
};

onMounted(() => {
    oneGuest.value = false;
    twoGuests.value = false;
    completed.value = false;
    no_guests.value = "";
    dateHasPassed.value = false;
});
</script>

<style lang="scss" module>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .date,
    h2 {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;

        @media (min-width: 560px) {
            font-size: 1.1rem;
        }

        @media (min-width: 800px) {
            font-size: 1.15rem;
        }
    }

    .date {
        font-size: 1.25rem;

        @media (min-width: 800px) {
            font-size: 1.5rem;
        }
    }
}

.fail {
    width: 12rem;
    color: var(--error-color);
    text-align: center;
}
</style>
