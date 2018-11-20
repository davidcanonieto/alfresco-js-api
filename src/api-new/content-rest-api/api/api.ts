import { CustomModelApi } from './customModel.api';

export * from './actions.api';
import { ActionsApi } from './actions.api';

export * from './activities.api';
import { ActivitiesApi } from './activities.api';

export * from './audit.api';
import { AuditApi } from './audit.api';

export * from './comments.api';
import { CommentsApi } from './comments.api';

export * from './downloads.api';
import { DownloadsApi } from './downloads.api';

export * from './favorites.api';
import { FavoritesApi } from './favorites.api';

export * from './groups.api';
import { GroupsApi } from './groups.api';

export * from './networks.api';
import { NetworksApi } from './networks.api';

export * from './nodes.api';
import { NodesApi } from './nodes.api';

export * from './people.api';
import { PeopleApi } from './people.api';

export * from './preferences.api';
import { PreferencesApi } from './preferences.api';

export * from './probes.api';
import { ProbesApi } from './probes.api';

export * from './queries.api';
import { QueriesApi } from './queries.api';

export * from './ratings.api';
import { RatingsApi } from './ratings.api';

export * from './renditions.api';
import { RenditionsApi } from './renditions.api';

export * from './sharedlinks.api';
import { SharedlinksApi } from './sharedlinks.api';

export * from './sites.api';
import { SitesApi } from './sites.api';

export * from './tags.api';
import { TagsApi } from './tags.api';

export * from './trashcan.api';
import { TrashcanApi } from './trashcan.api';

export * from './versions.api';
import { VersionsApi } from './versions.api';
import { WebscriptApi } from './webscript.api';
import { ClassesApi } from './classes.api';

export const CONTENT_APIS = [ActionsApi, ActivitiesApi, AuditApi, CommentsApi, DownloadsApi, FavoritesApi, GroupsApi, NetworksApi, NodesApi, PeopleApi, PreferencesApi, ProbesApi, QueriesApi, RatingsApi, RenditionsApi, SharedlinksApi, SitesApi, TagsApi, TrashcanApi, VersionsApi, WebscriptApi, ClassesApi, CustomModelApi];
