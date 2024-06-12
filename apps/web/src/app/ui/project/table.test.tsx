import "@testing-library/jest-dom";
import {render, screen, waitFor} from '@testing-library/react';

import ProjectTable from './table';
import {
  fetchProjectById,
  fetchCountryByName
} from '../../../lib/data';

jest.mock('../../../lib/data', () => ({
  fetchProjectById: jest.fn(),
  fetchCountryByName: jest.fn(),
}));

describe('ProjectTable Component', () => {
  it('renders project and country data correctly', async () => {
    // Set up the mock implementations
    (fetchProjectById as jest.Mock).mockResolvedValue(
      {id: '2', name: 'Sister Co.', country: 'Uganda', added_dstamp: '2012-01-02T10:17:14.934Z'}
    );
    (fetchCountryByName as jest.Mock).mockResolvedValue(
      {name: 'Uganda', code: 'UG', population: 47233223, emissionsTons: 0.01}
    );

    //https://stackoverflow.com/questions/53819864/how-to-async-await-in-react-render-function
    render(await ProjectTable({projectId: 1}));

    await waitFor(() => {
      expect(screen.getByText('Sister Co.')).toBeInTheDocument();
      expect(screen.getByText('Uganda')).toBeInTheDocument();
      expect(screen.getByText('UG')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('02/01/2012')).toBeInTheDocument();
      expect(screen.getByText('47233223')).toBeInTheDocument();
      expect(screen.getByText('0.01')).toBeInTheDocument();
    });
  });

  // TODO:
  // Test the error handling: no projects found, no country found, missing data in project, missing data in country
  // Add suspense to the component and test that it loads up correctly when query is taking a while
});
