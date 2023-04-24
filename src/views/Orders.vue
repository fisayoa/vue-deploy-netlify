<template>
  <div class="container-fluid vh-100 mt-5">
    <div class="display-flex justify-content-center row">
      <div v-if="orders.length < 1">
        <center>
          <h2 claas="text-center">No Order History</h2>
          <router-link to="/drinks" class="btn btn-main"
            >Buy Drinks</router-link
          >
        </center>
      </div>
      <div class="column-md-12" v-else>
        <div class="rounded">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead class="background__main">
                <th>Order #</th>
                <th>Drink Name</th>
                <th>Status</th>
                <th>Total</th>
                <th>Date Ordered</th>
                <th></th>
              </thead>
              <tbody class="table-body" v-for="order in orders" :key="order.id">
                <tr class="cell-1">
                  <td>#SO-{{ order.id }}</td>
                  <td>{{ order.name }}</td>
                  <td><span class="badge bg-success">Fullfilled</span></td>
                  <td>${{ order.total }}</td>
                  <td>{{ order.date }}</td>
                  <td><i class="bi bi-three-dots text-black-50"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    let val = JSON.parse(localStorage.getItem("orders"));

    const data = val.filter(
      (obj, index) => val.findIndex((item) => item.id === obj.id) === index
    );

    return {
      orders: data,
    };
  },

  mounted() {
    setTimeout(function() {
      localStorage.setItem("orders", "[]");
    }, 5000);
  },
};
</script>
