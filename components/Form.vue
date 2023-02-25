<template>
    <div v-if="selected" :class="$style.option_form">
        <FormBox label="Nume și prenume:">
            <template #input>
                <input type="text" v-model="guest_name" required />
            </template>
        </FormBox>
        <FormBox v-if="partner" label="Nume și prenume partener:">
            <template #input>
                <input type="text" v-model="partner_name" />
            </template>
        </FormBox>
        <FormBox label="Vă rugăm alegeți tipul de meniu:">
            <template #simple>
                <Checkbox
                    title="Meniu clasic"
                    :checked="menuOne"
                    @check="(event) => pickOne(event)"
                />
                <Checkbox
                    title="Meniu vegetarian"
                    :checked="menuTwo"
                    @check="(event) => pickTwo(event)"
                />
            </template>
        </FormBox>
        <FormBox label="Mai doriți să ne transmiteți ceva?">
            <template #input>
                <textarea name="message" v-model="message"></textarea>
            </template>
        </FormBox>
        <p :class="$style.fail" v-if="incomplete">
            Nu ați completat toate câmpurile, încercați din nou.
        </p>
        <div :class="$style.button_box">
            <RsvpButton label="Pot participa" @handleClick="accept" />
            <RsvpButton label="Nu pot participa" @handleClick="decline" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    selected: boolean;
    partner: boolean;
}>();

const emit = defineEmits(["accept", "decline"]);

// Data
const guest_name = ref("");
const partner_name = ref("");
const message = ref("");
const menu = ref("");
const confirm = ref(false);

const incomplete = ref(false);

// Menu
const menuOne = ref(false);
const menuTwo = ref(false);

const pickOne = (event: Event) => {
    menuOne.value = true;
    menuTwo.value = false;
    menu.value = (event.target as HTMLInputElement).value;
};

const pickTwo = (event: Event) => {
    menuOne.value = false;
    menuTwo.value = true;
    menu.value = (event.target as HTMLInputElement).value;
};

// RSVP
const accept = () => {
    confirm.value = true;
    if (!guest_name.value || !menu.value) {
        incomplete.value = true;
        return;
    }
    const newGuest = {
        guest_name: guest_name.value,
        partner_name: partner_name.value,
        message: message.value,
        menu: menu.value,
        confirm: confirm.value,
    };
    guest_name.value = "";
    partner_name.value = "";
    menu.value = "";
    message.value = "";
    partner_name.value = "";
    incomplete.value = false;

    emit("accept", newGuest, incomplete.value);
};

const decline = () => {
    confirm.value = false;
    if (!guest_name.value || !menu.value) {
        incomplete.value = true;
        return;
    }
    const newGuest = {
        guest_name: guest_name.value,
        partner_name: partner_name.value,
        message: message.value,
        menu: menu.value,
        confirm: confirm.value,
    };
    guest_name.value = "";
    partner_name.value = "";
    menu.value = "";
    incomplete.value = false;
    message.value = "";
    partner_name.value = "";

    emit("decline", newGuest, incomplete.value);
};

onMounted(() => {
    menuOne.value = false;
    menuTwo.value = false;
    guest_name.value = "";
    partner_name.value = "";
    message.value = "";
    partner_name.value = "";
    incomplete.value = false;
});
</script>

<style lang="scss" module>
.option_form {
    display: grid;
    justify-items: center;
    gap: 1rem;
}

.fail {
    width: 12rem;
    color: var(--error-color);
}

.button_box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
</style>
