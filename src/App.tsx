import { Categories } from './components/Categories';
import { Stats } from './components/Stats';
import { TODOCategoriesProvider } from './context/TODOCategories';
import { TODOListProvider } from './context/TODOList';

function App() {
  return (
    <TODOCategoriesProvider>
      <TODOListProvider>
        <div className="max-w-5xl mx-auto px-8 lg:p-0 my-4">
          <div className="min-h-screen w-full flex">
            <div className="w-64">
              <Stats />
            </div>
            <div className="flex-1 overflow-auto">
              <Categories />
            </div>
          </div>
        </div>
      </TODOListProvider>
    </TODOCategoriesProvider>
  );
}

export default App;

