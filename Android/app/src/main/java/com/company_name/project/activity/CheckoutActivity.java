/**
 *  Created by Abhishek Bhagwat.
 */

package com.company_name.project.activity;

import android.content.Intent;
import android.widget.ImageButton;
import android.widget.Button;
import com.company_name.project.R;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.os.Bundle;
import android.content.Context;
import android.widget.Toast;


public class CheckoutActivity extends AppCompatActivity {
	
	public static Intent newIntent(Context context) {
	
		// Fill the created intent with the data you want to be passed to this Activity when it's opened.
		return new Intent(context, CheckoutActivity.class);
	}
	
	private Button continuepaymentButton;
	private TextView methodNameTextView;
	private TextView valueTextView;
	private TextView methodNameTwoTextView;
	private TextView valueTwoTextView;
	private TextView methodNameThreeTextView;
	private TextView valueThreeTextView;
	private TextView methodNameFourTextView;
	private TextView valueFourTextView;
	private TextView titleTextView;
	private ImageButton headerMenuDarkButton;
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
	
		super.onCreate(savedInstanceState);
		this.setContentView(R.layout.checkout_activity);
		this.init();
	}
	
	private void init() {
	
		// Configure continuePayment component
		continuepaymentButton = this.findViewById(R.id.continuepayment_button);
		continuepaymentButton.setOnClickListener((view) -> {
			this.startActivity(PaymentDetailsActivity.newIntent(this));
		});
		
		// Configure Method Name component
		methodNameTextView = this.findViewById(R.id.method_name_text_view);
		
		// Configure value component
		valueTextView = this.findViewById(R.id.value_text_view);
		
		// Configure Method Name component
		methodNameTwoTextView = this.findViewById(R.id.method_name_two_text_view);
		
		// Configure value component
		valueTwoTextView = this.findViewById(R.id.value_two_text_view);
		
		// Configure Method Name component
		methodNameThreeTextView = this.findViewById(R.id.method_name_three_text_view);
		
		// Configure value component
		valueThreeTextView = this.findViewById(R.id.value_three_text_view);
		
		// Configure Method Name component
		methodNameFourTextView = this.findViewById(R.id.method_name_four_text_view);
		
		// Configure value component
		valueFourTextView = this.findViewById(R.id.value_four_text_view);
		
		// Configure Title component
		titleTextView = this.findViewById(R.id.title_text_view);
		
		// Configure Header Menu dark component
		headerMenuDarkButton = this.findViewById(R.id.header_menu_dark_button);
		headerMenuDarkButton.setOnClickListener((view) -> {
			this.startActivity(NavigationMenuActivity.newIntent(this));
		});
	}
}
