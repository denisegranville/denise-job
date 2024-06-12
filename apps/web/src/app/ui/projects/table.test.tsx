import '@testing-library/jest-dom';
import {render, screen, waitFor} from '@testing-library/react';

import ProjectsTable from './table';
import {
  fetchAllCountries,
  fetchAllProjects
} from '../../../lib/data';

jest.mock('../../../lib/data', () => ({
  fetchAllProjects: jest.fn(),
  fetchAllCountries: jest.fn(),
}));

describe('ProjectsTable Component', () => {

  it('should render projects all correctly without query', async () => {
    (fetchAllProjects as jest.Mock).mockResolvedValue([
      {id: '1', name: 'Denise Co.', country: 'New Zealand', added_dstamp: '2012-01-01T10:17:14.934Z'},
      {id: '2', name: 'Sister Co.', country: 'Uganda', added_dstamp: '2012-01-02T10:17:14.934Z'}
    ]);
    (fetchAllCountries as jest.Mock).mockResolvedValue([
      {name: 'New Zealand', code: 'NZ', population: 5267903, emissionsTons: 0.1},
      {name: 'Uganda', code: 'UG', population: 47233223, emissionsTons: 0.01},
    ]);

    //https://stackoverflow.com/questions/53819864/how-to-async-await-in-react-render-function
    render(await ProjectsTable({query: ''}));

    await waitFor(() => {
      expect(screen.getByText('New Zealand')).toBeInTheDocument();
      expect(screen.getByText('Uganda')).toBeInTheDocument()
      expect(screen.getByText('Denise Co.')).toBeInTheDocument()
      expect(screen.getByText('Sister Co.')).toBeInTheDocument();
    });
  });

  // TODO:
  // Test the error handling: no project found, no country found, missing data in project, missing data in country
  // Add suspense to the component and test that it loads up correctly when query is taking a while

});
