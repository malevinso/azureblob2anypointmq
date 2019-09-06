# AzureBlob2AnyPointMQ

Azure function to send information from a Blob file to an AnypointMQ Exchange

### Hot points
  - **trigger:** File Storage (blob)
  - **language:** Javascript (Nodejs)
  - **cache-mechanism:**: Azure Redis Cache

### NodeJS libraries
  - **redis-async**: a Redis library that uses asyc/await
  - **node-fetch**: fetch (HTTP Request) implementation for Nodejs

### To trigger the function
  - Go to Azure Functions dashboard and Test/Run the function 
    - ***request body:*** https://blob2anypointmq.blob.core.windows.net/blobs/mb_queries.txt
  - Add a file to the Blob Storage (the function will run automatically)
      - ***storage account:*** blob2anypointmq
      - ***Blob Container:*** blobs
      - [Blob Container]

## Azure Redis Cache
  - ***Connection String:*** redis://modus001.redis.cache.windows.net:6380,password=X5Og8qxKRiotFrrobkgBagZ5klfQ9sbzkkbtthJziwk=,ssl=True,abortConnect=False
  - ***Port:*** 6380
  - ***Password:*** X5Og8qxKRiotFrrobkgBagZ5klfQ9sbzkkbtthJziwk=

   [Blob Container]: <storageexplorer://v=1&accountid=%2Fsubscriptions%2F57fafd7d-0d46-4031-bb62-c674b93fa2b9%2FresourceGroups%2Fblob2anypointmq%2Fproviders%2FMicrosoft.Storage%2FstorageAccounts%2Fblob2anypointmq&subscriptionid=57fafd7d-0d46-4031-bb62-c674b93fa2b9&resourcetype=Azure.BlobContainer&resourcename=blobs>
