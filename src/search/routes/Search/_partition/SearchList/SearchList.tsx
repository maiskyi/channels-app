import { FC, Fragment } from 'react';

import { DTO } from '@network/api';
import { Grid } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { ChannelCard } from '@common/components';

interface SearchListProps {
  data: DTO.ChannelItem[];
}

export const SearchList: FC<SearchListProps> = ({ data }) => {
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <Grid.Row flex="0 0 auto" key={item.id}>
            <Grid.Cell>
              <Link
                params={{ id: item.id }}
                pathname={RoutePath.Channel}
                unstyled
              >
                <ChannelCard item={item} />
              </Link>
            </Grid.Cell>
          </Grid.Row>
        );
      })}
    </Fragment>
  );
};
