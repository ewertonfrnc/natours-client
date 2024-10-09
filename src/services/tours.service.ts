import api from "./api.service.ts";

class ToursService {
  async getTours() {
    const { data } = await api().get("/tours", {
      params: { page: 1, limit: 10 },
    });

    return data;
  }

  async getTour(tourId: string) {
    const { data } = await api().get(`/tours/${tourId}`);

    return data;
  }
}

export default new ToursService();
