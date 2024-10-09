import { defineStore } from "pinia";
import ToursService from "../services/tours.service.ts";

export const useToursStore = defineStore("tours", {
  state() {
    return {};
  },
  actions: {
    async getTours() {
      try {
        return await ToursService.getTours();
      } catch (e) {
        console.error("error", e);
      }
    },
    async getTour(tourId: string) {
      try {
        return await ToursService.getTour(tourId);
      } catch (e) {
        console.error("error", e);
      }
    },
  },
});
