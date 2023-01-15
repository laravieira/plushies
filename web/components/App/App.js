define([
  'components/Table/Table.component',
  'components/EditModal/EditModal.component',
  'components/CreateModal/CreateModa.component',
  'components/DeleteModal/DeleteModal.component',
  'Storage',
  'handlers/Amount.handler',
  'handlers/Pagination.handler',
  'handlers/Search.handler',
  'handlers/Add.handler',
  'handlers/Update.handler',
  'handlers/Delete.handler'
], App);

function App() {
  const app = $('#app');

  app.append(Table());
  Storage.updateList();

  return app;
}
