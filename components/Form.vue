<template>
  <form ref="form" @submit.prevent="send">
    <div class="name_message_rsvp">
      <label>
        Nume și prenume:
        <input type="text" name="user_name" />
      </label>
    </div>
    <button v-if="rsvp" @click="confirmForm" type="button">
      Pot participa
    </button>
    <button v-if="rsvp" @click="declineForm" type="button">
      Nu pot participa
    </button>
    <div v-if="confirm">
      <h3>Câte persoane?</h3>
      <label>
        <input
          type="radio"
          name="no_guests"
          value="O persoană"
          @click="confirmOne"
        />
        O persoană
      </label>
      <label>
        <input
          type="radio"
          name="no_guests"
          value="Două persoane"
          @click="confirmTwo"
        />
        Două persoane
      </label>
      <div v-if="one_rsvp" class="one_guest">
        <Menu />
        <input type="submit" name="user_rsvp" value="Pot participa" />
      </div>

      <div v-if="two_rsvp" class="two_guests">
        <label>
          Nume și prenume partener:
          <input type="text" name="user_name" />
        </label>
        <Menu />
        <Message />
        <input type="submit" name="user_rsvp" value="Pot participa" />
      </div>
    </div>
    <div v-if="decline">
      <Message />
      <input type="submit" name="user_rsvp" value="Nu pot participa" />
    </div>
  </form>
</template>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import Message from "@/components/Message.vue";

// const supabase = useSupabaseClient();

// const data = await supabase.from("guests").select("*");
// console.log(data); 

const form = ref(null);
const one_rsvp = ref(false);
const two_rsvp = ref(false);
const rsvp = ref(true);
const confirm = ref(false);
const decline = ref(false);

const send = () => {
  console.log("sent RSVP");
};
const confirmForm = () => {
  confirm.value = true;
  rsvp.value = false;
};

const declineForm = () => {
  decline.value = true;
  rsvp.value = false;
};

const confirmOne = () => {
  one_rsvp.value = true;
  two_rsvp.value = false;
};

const confirmTwo = () => {
  two_rsvp.value = true;
  one_rsvp.value = false;
};
</script>

<style></style>
