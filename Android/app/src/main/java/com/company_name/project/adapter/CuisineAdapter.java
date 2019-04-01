package com.company_name.project.adapter;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.company_name.project.R;
import com.company_name.project.activity.GalleryCategoryActivity;
import com.company_name.project.activity.NorthSpineTwoActivity;
import com.company_name.project.model.Cuisine;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class CuisineAdapter extends RecyclerView.Adapter<CuisineAdapter.ViewHolder> {
    private ArrayList<Cuisine> cuisineList;   //list<item> items
    Context context;
    public CuisineAdapter(ArrayList<Cuisine> cuisineList) {

        //db = new SQLiteDatabaseHandler(context);
        this.cuisineList = cuisineList;
        Log.i("CuisineList", "" + cuisineList.size());
    }

    @Override
    public CuisineAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        context = parent.getContext();
        View itemView = LayoutInflater.from(context).inflate(R.layout.cuisine_row, parent, false);
        return new ViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(final CuisineAdapter.ViewHolder holder, final int position) {
        final Cuisine cuisine = cuisineList.get(position);
        holder.name.setText(cuisine.name);
        Picasso.get().load(cuisine.img).into(holder.img);
        holder.img.setOnClickListener(view -> {
            context.startActivity(NorthSpineTwoActivity.newIntent(context));
        });
    }
    @Override
    public int getItemCount() {
        int size = 0;
        if(cuisineList != null)
            size = cuisineList.size();
        return size;
    }

    public void updateList(ArrayList<Cuisine> list) {
        this.cuisineList = list;
        notifyDataSetChanged();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        public TextView name;
        public ImageView img;

        public ViewHolder(View itemView) {
            super(itemView);
            name = itemView.findViewById(R.id.cuisine_name);
            img = itemView.findViewById(R.id.cuisine_img);
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
        }
    }
}
