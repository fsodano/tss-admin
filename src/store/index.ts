import { createStore } from "vuex";
import Turret from "@/entities/Turret";
import IState from "@/store/IState";
import { Account, Keypair } from "stellar-sdk";

export default createStore<IState>({
  state: {
    turret: Turret.createNull(),
    privateKey: process.env.VUE_APP_PRIVATE_KEY || "",
  },
  mutations: {
    setTurret(state: IState, turret: Turret): void {
      state.turret = turret;
    },
  },
  actions: {},
  modules: {},
  getters: {
    keypair: (state) => Keypair.fromSecret(state.privateKey),
  },
});
