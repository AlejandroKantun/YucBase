
SQLite.enablePromise(true);

async function openDatabase() {
  const db = await SQLite.openDatabase({ name: 'data.db' });

  // Create tables

  /// ReactNativeFlipperDatabases - START

  if (__DEV__) {
    // Import connectDatabases function and required DBDrivers
    const { connectDatabases, SQLiteStorage } = require('react-native-flipper-databases');
    connectDatabases([
      // Pass in database definitions
      new SQLiteStorage([
        {
          name: 'data.db',
          database: db,
        },
      ]),
    ]);
  }

  /// ReactNativeFlipperDatabases - END

  return db;
}

// ...