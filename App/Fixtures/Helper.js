const keyExtractorFlatList = (item, index) => index.toString();

const renderScreen = ({ item }) => item();

const keyExtractorSectionList = (item, index) => (item + index).toString();

const noop = () => { };

export {
  keyExtractorFlatList,
  renderScreen,
  keyExtractorSectionList,
  noop
};