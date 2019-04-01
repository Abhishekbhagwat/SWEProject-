package com.company_name.project;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteConstraintException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import android.widget.Toast;

import com.company_name.project.model.User;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by CT on 4/30/2018.
 */

public class SQLiteDatabaseHandler  extends SQLiteOpenHelper {
    private static final int DATABASE_VERSION = 3;
    private static final String DATABASE_NAME = "repsynq.db";
    Context context;

    public SQLiteDatabaseHandler(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        this.context = context;
    }

    public void createUserTable(SQLiteDatabase db) {
        String CREATION_TABLE = "CREATE TABLE user ( "
                + "id TEXT PRIMARY KEY," + "name TEXT , " + "img TEXT)";
        db.execSQL(CREATION_TABLE);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        // Create all the tables here
        createUserTable(db);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        // Implement migration of different databases here
        // you can implement here migration process
        //db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        //this.onCreate(db);
        String sql = "drop table user";
        try {
            db.execSQL(sql);
        } catch (SQLException e) {}

        createUserTable(db);
    }

    public void addUser(User user) {
        SQLiteDatabase db = this.getWritableDatabase();
        db.beginTransaction();
        ContentValues values = new ContentValues();
        try{

            db.insertOrThrow("users",null, values);
        }catch (SQLiteConstraintException sqlEx){
            db.update("users", values, "user_id=?", new String[]{user.user_id} );
            Log.e("Error:", sqlEx.getMessage() + "\n" + sqlEx.getStackTrace());
        }catch(Exception ex)
        {
            Log.e("Error:", ex.getMessage() + "\n" + ex.getStackTrace());
        }
        db.setTransactionSuccessful();
        db.endTransaction();
        db.close();
    }

    public User getUserModel(){
        User userModel = new User();
        String query = "SELECT  * FROM users";
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.rawQuery(query, null);
        if (cursor != null)
            cursor.moveToFirst();
        if(cursor.getCount() == 0)
            return null;

        userModel = getUserModel(cursor);
        return userModel;
    }

    public User getUserModel(Cursor cursor) {
        User userModel = new User();
        try {
            userModel.user_id = cursor.getString(1);
            userModel.user_name = cursor.getString(2);
            userModel.user_mail = cursor.getString(3);
            userModel.user_role = cursor.getString(4);
            userModel.token = cursor.getString(5);
        }catch(Exception e){
            Log.e("Error: ", e.getStackTrace().toString());
            userModel = null;
        }
        return userModel;
    }

    // Drop all tables
    public void deleteAllTables(SQLiteDatabase db) {
        SQLiteDatabase dbase =  db;
        if(dbase == null) {
            dbase = this.getWritableDatabase();
        }
        dbase.delete("users", null, null);
    }
}
