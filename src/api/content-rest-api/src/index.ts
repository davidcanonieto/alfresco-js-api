/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { ChangesApi } from './api/changesApi';
import { ChildAssociationsApi } from './api/childAssociationsApi';
import { CommentsApi } from './api/commentsApi';
import { FavoritesApi } from './api/favoritesApi';
import { NodesApi } from './api/nodesApi';
import { NetworksApi } from './api/networksApi';
import { RatingsApi } from './api/ratingsApi';
import { PeopleApi } from './api/peopleApi';
import { RenditionsApi } from './api/renditionsApi';
import { QueriesApi } from './api/queriesApi';
import { SharedlinksApi } from './api/sharedlinksApi';
import { SitesApi } from './api/sitesApi';
import { TagsApi } from './api/tagsApi';
import { WebscriptApi } from './api/webscriptApi';
import { DownloadsApi } from './api/downloadsApi';
import { VersionsApi } from './api/versionsApi'
import { ClassesApi } from './api/classesApi';
import { GroupsApi } from './api/groupsApi';
import { CustomModelApi } from './api/customModelApi';

import { NodesApi as _NodesApi } from './api/nodesApi';
import { ChangesApi as _ChangesApi } from './api/changesApi';
import { ChildAssociationsApi as _ChildAssociationsApi } from './api/childAssociationsApi';
import { CommentsApi as _CommentsApi } from './api/commentsApi';
import { FavoritesApi as _FavoritesApi } from './api/favoritesApi';
import { NetworksApi as  _NetworksApi } from './api/networksApi';
import { RatingsApi as _RatingsApi } from './api/ratingsApi';
import { PeopleApi as _PeopleApi } from './api/peopleApi';
import { RenditionsApi as _RenditionsApi } from './api/renditionsApi';
import { QueriesApi as _QueriesApi } from './api/queriesApi';
import { SharedlinksApi as _SharedlinksApi } from './api/sharedlinksApi';
import { SitesApi as _SitesApi } from './api/sitesApi';
import { TagsApi as _TagsApi } from './api/tagsApi';
import { WebscriptApi as _WebscriptApi } from './api/webscriptApi';
import { DownloadsApi as _DownloadsApi } from './api/downloadsApi';
import { VersionsApi as _VersionsApi } from './api/versionsApi'
import { ClassesApi as _ClassesApi } from './api/classesApi';
import { GroupsApi as _GroupsApi } from './api/groupsApi';
import { CustomModelApi as _CustomModelApi } from './api/customModelApi';
import { ChildAssociationBody } from '../../../api-new/content-rest-api/model/childAssociationBody';
import { PathElement } from '../../../api-new/content-rest-api/model/pathElement';

export const CONTENT_LEGACY_APIS = [ChangesApi, ChildAssociationsApi, FavoritesApi, NetworksApi, NodesApi, CommentsApi, PeopleApi, RatingsApi, RenditionsApi, QueriesApi, SharedlinksApi, SitesApi, TagsApi, WebscriptApi, DownloadsApi, VersionsApi, ClassesApi, GroupsApi, CustomModelApi];

export namespace Core {
    export class ChangesApi extends _ChangesApi {
    }

    export class ChildAssociationsApi extends _ChildAssociationsApi {
    }

    export class FavoritesApi extends _FavoritesApi {
    }

    export class NetworksApi extends _NetworksApi {
    }

    export class NodesApi extends _NodesApi {
    }

    export class CommentsApi extends _CommentsApi {
    }

    export class PeopleApi extends _PeopleApi {
    }

    export class RatingsApi extends _RatingsApi {
    }

    export class RenditionsApi extends _RenditionsApi {
    }

    export class QueriesApi extends _QueriesApi {
    }

    export class SharedlinksApi extends _SharedlinksApi {
    }

    export class SitesApi extends _SitesApi {
    }

    export class TagsApi extends _TagsApi {
    }

    export class WebscriptApi extends _WebscriptApi {
    }

    export class DownloadsApi extends _DownloadsApi {
    }

    export class VersionsApi extends _VersionsApi {
    }

    export class ClassesApi extends _ClassesApi {
    }

    export class GroupsApi extends _GroupsApi {
    }

    export class CustomModelApi extends _CustomModelApi {
    }
}


export namespace Legacy {
    export interface Core {
        changesApi: ChangesApi;
        childAssociationsApi: ChildAssociationsApi;
        favoritesApi: FavoritesApi;
        networksApi: NetworksApi;
        nodesApi: NodesApi;
        commentsApi: CommentsApi;
        peopleApi: PeopleApi;
        ratingsApi: RatingsApi;
        renditionsApi: RenditionsApi;
        queriesApi: QueriesApi;
        sharedlinksApi: SharedlinksApi;
        sitesApi: SitesApi;
        tagsApi: TagsApi;
        webscriptApi: WebscriptApi;
        downloadsApi: DownloadsApi;
        versionsApi: VersionsApi;
        classesApi: ClassesApi;
        groupsApi: GroupsApi;
        customModelApi: CustomModelApi;

    }
}

export { ChildAssociationBody as AssocChildBody } from '../../../api-new/content-rest-api/model/childAssociationBody';
export { ChildAssociationBody as AssocTargetBody } from '../../../api-new/content-rest-api/model/childAssociationBody';
export { FavoriteBodyCreate as FavoriteBody } from '../../../api-new/content-rest-api/model/favoriteBodyCreate';
export { SearchRequest as QueryBody } from '../../../api-new/search-rest-api/model/searchRequest';
export { PathInfo as PathInfoEntity } from '../../../api-new/content-rest-api/model/pathInfo';
export { NodeEntry as MinimalNodeEntity } from '../../../api-new/content-rest-api/model/nodeEntry';
export { DeletedNodeEntry as DeletedNodeEntity } from '../../../api-new/content-rest-api/model/deletedNodeEntry';
export { Node as MinimalNode } from '../../../api-new/content-rest-api/model/node';
export { Node as MinimalNodeEntryEntity } from '../../../api-new/content-rest-api/model/node';
export { PathElement as PathElementEntity } from '../../../api-new/content-rest-api/model/pathElement';
export { SiteBodyCreate as SiteBody } from '../../../api-new/content-rest-api/model/siteBodyCreate';
export { GroupPaging as GroupsPaging } from '../../../api-new/content-rest-api/model/groupPaging';