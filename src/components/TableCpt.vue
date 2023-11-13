<script setup>
import { formatDateToHumanese } from '../utility/formatDate'
const props = defineProps(['apiData'])
</script>

<template>
  <div class="tableCpt">
    <table>
      <thead>
        <tr>
          <th>
            <h1>From Currency</h1>
          </th>
          <th>
            <h1>To Currency</h1>
          </th>
          <th>
            <h1>Exchange Rate</h1>
          </th>
          <th>
            <h1>Last Refreshed (UTC)</h1>
          </th>
          <th>
            <h1>Bid Price</h1>
          </th>
          <th>
            <h1>Ask Price</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tableItem in props.apiData" :key="tableItem.id">
          <td>({{ tableItem.fromCurrency }}) {{ tableItem.fromCurrencyLabel }}</td>
          <td>({{ tableItem.toCurrency }}) {{ tableItem.toCurrencyLabel }}</td>
          <td>{{ tableItem.exchangeRate }}</td>
          <td>{{ formatDateToHumanese(tableItem.lastRefreshed) }}</td>
          <td>{{ tableItem.bidPrice }}</td>
          <td>{{ tableItem.askPrice }}</td>
        </tr>
        <!--
        <tr>
          <td>(BTC) Bitcoin</td>
          <td>(CNY) Chinese Yuan</td>
          <td>271164.14161200</td>
          <td>{{ formatDateToHumanese('2023-11-11 14:42:08') }}</td>
          <td>{{ x }}, {{ y }}</td>
          <td>271164.14161200</td>
        </tr>
        -->
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/mixins/customScrollMixin.scss';

.tableCpt {
  display: flex;
  justify-content: center;
  margin: 4.4rem 0 0 0;
  box-shadow: 0px 3.5rem 5rem rgba(0, 0, 0, 0.2);
  .mainLabel {
    display: flex;
    width: 100%;
    color: #4ecdc4;
    font-size: 2rem;
    text-align: center;
  }
}

table {
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: whitesmoke;
  border-spacing: 0;
  border-collapse: separate;

  td,
  th {
    text-align: center;
    padding: 0.8rem;
  }

  td {
    border-right: 0.1rem solid #f8f8f8;
    font-size: 1.2rem;
  }

  thead th {
    color: #ffffff;
    background-color: rgba(34, 8, 95, 0.75);

    &:nth-child(odd) {
      background-color: rgba(34, 8, 95, 0.85);
    }
  }

  tbody tr {
    transition:
      opacity 0.2s ease-out,
      transform 0.2s ease-out;
    &:nth-child(odd) {
      background-color: lighten(#4ecdc4, 45%);
    }

    &:nth-child(even) {
      background-color: lighten(#4ecdc4, 35%);
    }

    &:hover {
      background-color: #464a52;
      -webkit-box-shadow: 0 6px 6px -6px #0e1119;
      -moz-box-shadow: 0 6px 6px -6px #0e1119;
      box-shadow: 0 6px 6px -6px #0e1119;
      color: lighten(#4ecdc4, 35%);
    }
  }
}

@media (max-width: 76.7rem) {
  table {
    display: block;
    width: 100%;

    thead,
    tbody,
    thead th {
      display: block;
    }

    thead th:last-child {
      border-bottom: none;
    }

    thead {
      float: left;
    }

    tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
      @include customScrollMixin(
        $size: var(--scroll-size, 1rem),
        $thumb: var(--scroll-thumb, none),
        $thumb-color: var(--scroll-thumb-color, grey),
        $thumb-radius: var(--scroll-thumb-radius, var(--scroll-radius)),
        $track-color: var(--scroll-track, transparent),
        $track-radius: var(--scroll-track-radius, var(--scroll-radius))
      );
      $bg-mask: rgb(255 255 255 / 25%);
      --scroll-size: 1.2rem;
      --scroll-radius: 1rem;
      --scroll-track: rgb(0 0 0 / 40%);
      --scroll-thumb: linear-gradient(
        45deg,
        #{$bg-mask} 20%,
        transparent 20%,
        transparent 40%,
        #{$bg-mask} 40%,
        #{$bg-mask} 60%,
        transparent 60%,
        transparent 80%,
        #{$bg-mask} 80%
      );
      --scroll-thumb-color: #3e8b63;
    }

    td,
    th {
      padding: 2rem 0.625em 0.625em 0.625em;
      height: 6rem;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 12rem;
      font-size: 1.3rem;
      text-overflow: ellipsis;
    }

    thead th {
      text-align: left;
      border-bottom: 0.1rem solid #f7f7f9;
    }

    tbody tr {
      display: table-cell;
    }

    tbody tr:nth-child(odd) {
      background: none;
    }

    tr:nth-child(even) {
      background: transparent;
    }

    tr td:nth-child(odd) {
      background: #f8f8f8;
      border-right: 0.1rem solid #e6e4e4;
    }

    tr td:nth-child(even) {
      border-right: 0.1rem solid #e6e4e4;
    }

    tbody tr:hover {
      background-color: red;

      td:nth-child(odd),
      td:nth-child(even) {
        background-color: #464a52;
      }
    }

    tbody td {
      display: block;
      text-align: center;
    }
  }
}
</style>
